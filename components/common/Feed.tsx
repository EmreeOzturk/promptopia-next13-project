'use client';
import {useState,useEffect} from 'react';
import PromptCard from '@/components/common/PromptCard';
import { set } from 'mongoose';

const PromptCardList = ({data, handleTagClick}:any) => {
  return <div className='mt-16 prompt_layout'>
    {data.map((post:any) => (
      <PromptCard 
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
      />
    ))}
  </div>;
}
const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts , setPosts] = useState([]); 
  const handleSearchChange = (e) => {}

  useEffect(() => {
    const fetchSearchResults = async () => {
      const res = await fetch(`/api/prompt`);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    }
    fetchSearchResults();
  }  , [searchText]);
  return <section className='feed'>
    <form className='relative w-full flex-center'>
      <input type="text" 
      placeholder="Search for a tag or username"
      className='search_input peer'
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      required
      />
    </form>
    <PromptCardList 
      data={posts}
      handleTagClick={() => {}}
    />
  </section>;
};

export default Feed;
