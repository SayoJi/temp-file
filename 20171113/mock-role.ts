import { Role } from './role';

export const ROLE: Role[] = [
  { id: 1, code: ['code001'], name: '1aaa', description: 'description001', parentId: 2 },
  { id: 2, code: ['code002'], name: '2aaa', description: 'description002', parentId: 1 },
  { id: 3, code: ['code002'], name: '3aaa', description: 'description003', parentId: 1 },
  { id: 4, code: ['code003'], name: '4aaa', description: 'description004', parentId: 1 },
  { id: 5, code: ['code004'], name: '5aaa', description: 'description005', parentId: 1 },
  { id: 6, code: ['code005'], name: '6aaa', description: 'description006', parentId: 1 }
];
