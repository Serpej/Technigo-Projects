// ===================================================
// File: authService.ts
// Example of a service module that imports types from another module
// ===================================================
import { User, UserRole } from './1userTypes';

export class AuthService {
    checkAccess(user: User, requiredRole: UserRole): boolean {
        // Simplified auth logic
        return true;
    }
}