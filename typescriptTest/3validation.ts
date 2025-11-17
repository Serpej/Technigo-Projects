// ===================================================
// File: validation.ts
// Example of combining modules and namespaces
// This file is a module that contains a namespace
// ===================================================
export namespace Validators {
    // Private members in a namespace are only accessible within the namespace
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Public functions are exported and can be used outside the namespace
    export function isValidEmail(email: string): boolean {
        return EMAIL_REGEX.test(email);
    }

    export function isValidPassword(password: string): boolean {
        return password.length >= 8;
    }
}