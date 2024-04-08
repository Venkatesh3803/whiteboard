
"use client"

import { initKeycloak } from '@/utils/Auth';
import { useEffect } from 'react';
import Room from '..';


export default function Home() {
  useEffect(() => {
    const initializeKeycloak = async () => {
      const keycloak = await initKeycloak();
      console.log('Authenticated:', keycloak.authenticated);
    };
    initializeKeycloak();
  }, []);


  return (
    <div>
      <Room />
    </div>
  );
}