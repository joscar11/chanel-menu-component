// For TypeScript to recognize .module.scss
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

// For TypeScript to recognize .scss
declare module '*.scss';

// For TypeScript to recognize images
declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
