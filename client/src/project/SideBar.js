import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { postApi } from '@lib/api';
import TagList from '@components/gallery/TagList';
import Tags from '@components/gallery/Tags';
export default function SideBar() {
    const [isLoading, setIsLoading] = useState(true);
    const [tags, setTags] = useState([]);
    const [searchParams] = useSearchParams();
    const getPosts = async () => {
        setIsLoading(true);
        try {
            const params = {
                authorId: searchParams.get('auth'),
            };
            const { data } = await postApi.getAllPosts(params);
            const allTag = {
                _id: 'all',
                name: '전체보기',
                lowerName: '전체보기',
                post: data.length,
                selected: false,
                __v: 0,
            };
            const newTagsMap = data.reduce((acc, item) => {
                const { categories } = item;
                categories.forEach(({ category }) => {
                    if (acc[category._id]) {
                        acc[category._id].post += 1;
                        return;
                    }
                    acc[category._id] = Object.assign(Object.assign({}, category), { post: 1, selected: false });
                });
                return acc;
            }, {});
            const newTags = Object.values(newTagsMap);
            setTags([allTag, ...newTags]);
        }
        catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    };
    const handleSelected = () => {
        const searchTag = searchParams.get('tag');
        const id = searchTag || 'all';
        setTags((curr) => curr.map((el) => {
            const { _id, selected } = el;
            if (selected || _id === id) {
                if (selected && _id === id) {
                    return el;
                }
                return Object.assign(Object.assign({}, el), { selected: !selected });
            }
            return el;
        }));
    };
    useEffect(() => {
        getPosts();
    }, [searchParams]);
    useEffect(() => {
        if (!isLoading) {
            handleSelected();
        }
    }, [isLoading, searchParams]);
    return (React.createElement("div", { className: "SideBar", style: { position: 'relative' } },
        React.createElement(TagList, { tags: tags }),
        React.createElement(Tags, { tags: tags })));
}