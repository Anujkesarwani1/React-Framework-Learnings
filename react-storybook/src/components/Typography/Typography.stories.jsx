import Typography from './Typography'

export default {
    title: 'Atoms/Typography',
    component: Typography,
    argTypes: {
        variant: {
        control: 'select',
        options: [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'p',
        ],
        defaultValue: { summary: 'h3' },
        type: 'string',
        },
    },
};

export const typography = {
    args: {
        variant: '',
        textData: "Hello Everyone",
    }
}