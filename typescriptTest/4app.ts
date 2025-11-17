// ===================================================
// File: app.ts
// Main application showing how to use both modules and namespaces
// ===================================================

// Importing from different modules
import { User } from './1userTypes';
import { AuthService } from './2authService';
import { Validators } from './3validation';

// Example usage of imported types and services from modules
const newUser: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};

// Using imported service (from module)
const authService = new AuthService();
const hasAccess = authService.checkAccess(newUser, 'admin');

// Using namespace functions (imported from another module)
if (Validators.isValidEmail(newUser.email)) {
    console.log('Email is valid');
}

// Example of defining and using a namespace within the same file
// This is useful for grouping related functionality
namespace UserHelpers {
    export function formatUserName(user: User): string {
        return user.name.toUpperCase();
    }
}

// Using the namespace defined in the same file
const formattedName = UserHelpers.formatUserName(newUser);

// Another example of using namespaces to organize related functionality
// This shows how namespaces can group related utility functions
namespace StringUtils {
    export function capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    export function reverse(str: string): string {
        return str.split('').reverse().join('');
    }
}