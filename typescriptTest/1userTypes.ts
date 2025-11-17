// ===================================================
// File: userTypes.ts
// Example of a module containing shared types
// ===================================================
export interface User {
    id: number;
    name: string;
    email: string;
};

export type UserRole = 'admin' | 'user' | 'guest';