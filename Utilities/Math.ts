function Normalize(value: number, min: number, max: number): number
{
    return (value - min) / (max - min);
}

function LinearInterpolation(norm: number, min: number, max: number): number
{
    return (max - min) * norm + min;
}

function Map(value: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number): number
{
    return LinearInterpolation(Normalize(value, sourceMin, sourceMax), destMin, destMax);
}

function Clamp(value: number, min: number, max: number): number
{
    return Math.min(Math.max(value, min), max);
}