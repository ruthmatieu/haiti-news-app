const size = {
    sm: '300px',
    md: '640px',
    lg: '1024px',
    xl: '1200px'
}

const device = {
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
}

export default {size, device};