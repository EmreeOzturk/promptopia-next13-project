'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@/components/common/Profile';
const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleEdit = (id: string) => {
    router.push(`/edit-prompt/${id}`);
  };
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/prompt/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Profile
      name="my"
      description="Welcome to your profile page!"
      data={[]}
      handleEdit={}
      handleDelete={}
    />
  );
};

export default ProfilePage;
