"use client"
import { useSearchParams } from 'next/navigation';
import PostItem from '../../../components/Posts/PostItem/PostItem';

function page() {
    const data = useSearchParams();
    const id = data.get('id');
    const title = data.get('title');
    const body = data.get('body');
    const post = {
        id: Number(id),
        title: title,
        body: body,
    }
    return (
        <div className='m-6 flex items-center flex-col'>
            <p className='text-gray-50 flex justify-center text-xl mb-3'>Post</p>
            <PostItem key={id} post={post} />
        </div>
    )
}

export default page