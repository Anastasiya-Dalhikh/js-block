export type AppTheme = {
    colors:{
        headerBg: string;
        headerText: string;

        pageBg: string;
        cardBg: string;
        inputBg: string;
        formBg: string;

        heading: string;
        primaryText: string;
        secondaryText: string;

        border: string;

        btnBg: string;
        btnText: string;
        btnHover: string;

        link: string;

    }
}

export const lightTheme: AppTheme ={
    colors:{
        headerBg: '#1e3a8a',
        headerText: '#ffffff',

        pageBg: '#f5f5f5',
        cardBg: 'transparent',
        inputBg: '#ffffff',
        formBg: '#e7e5e5',

        heading: '#111827',
        primaryText: '#374151',
        secondaryText: '#6b7280',

        border: '#c2bfbf',

        btnBg: '#1e3a8a',
        btnText: '#ffffff',
        btnHover: '#1e40af',

        link: '#1e3a8a',
    }
}

export const darkTheme: AppTheme = {
    colors:{
        headerBg: '#3b82f6',
        headerText: '#ffffff',

        pageBg: '#121212',
        cardBg: 'transparent',
        inputBg: '#7d91b2',
        formBg: '#2d3748',

        heading: '#f9fafb',
        primaryText: '#e5e7eb',
        secondaryText: '#9ca3af',

        border: '#374151',

        btnBg: '#3b82f6',
        btnText: '#ffffff',
        btnHover: '#60a5fa',

        link: '#60a5fa',
    }
}