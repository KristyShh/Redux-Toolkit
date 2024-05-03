import { useEffect, useState } from 'react';
import { usePagination } from '@mantine/hooks';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import '../pages/poststyle.css';
import { fetchPostsThunk } from '../../redux/posts/thunks';
import { SearchControl } from '../pages/searchControl/searcControl';
import _  from 'lodash';

export const PostsList = () => {
    const countPosts = useAppSelector((state) => state.posts.postsList.count);
    const [pageNumber, setPageNumber] = useState(1);
    const [sortBy, setSortBy] = useState('');
    const pagination = usePagination({
        total: countPosts,
        initialPage: 1, 
        onChange(page) {
            setPageNumber(page);
          
        },
    });
    

    const dispatch = useAppDispatch();
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(6);
    const [searchParam, setSearchParam] = useState('');
    const { status, postsList } = useAppSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPostsThunk(  ));//dispatch(fetchPostsThunk( { limit, offset, searchParam, sortBy } ))
    }, [offset, limit, searchParam, sortBy]);

    useEffect(() => {
        setOffset((pageNumber - 1) * limit);
    }, [pageNumber, limit]);

    useEffect(() => {
        setOffset(0); // Reset offset when search parameter changes
    }, [searchParam]);

    // Filtering posts based on the current search query
    const filteredPosts = postsList.results.filter((post: any) =>
        post.title.toLowerCase().includes(searchParam.toLowerCase())
    );
    
    const sortedPosts = _.sortBy(filteredPosts, (post: any) => {
        switch (sortBy) {
            case 'date':
                return new Date(post.date).getTime();
            case 'title':
                return post.title.toLowerCase();
            case 'text':
                return post.text.toLowerCase();
            case 'lesson_num':
                return post.lesson_num;
            default:
                return 0;
        }
    });

   return (
        <>
            <SearchControl onChange={(value) => setSearchParam(value)} />
            <div>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">-- Select --</option>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                    <option value="text">Text</option>
                    <option value="lesson_num">Lesson Number</option>
                </select>
            </div>

            {status === 'loading' && <div>Loading...</div>}
            {status === 'error' && <div>Error</div>}
            {postsList && (
                <div className='postsList'>
                    {sortedPosts.slice(offset, offset + limit).map((post: any) => (
                        <div key={post.id}>
                            <h2 className='title'>{post.title}</h2>
                            <img className='image' src={post.image} alt={post.title} />
                            <p>Author: {post.author}</p>
                            <p>{post.description}</p>
                            <p>Date: {post.date}</p>
                            <p>Lesson Number: {post.lesson_num}</p>
                        </div>
                    ))}

                    <div className='pagination-btns'>
                        {pagination.range.map((page) => (
                            <button key={page} onClick={() => pagination.setPage(page)}>
                                 {page}
                                {pageNumber === page && <span className='active'></span>}

                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};