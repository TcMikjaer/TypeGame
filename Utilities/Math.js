function Normalize(value, min, max) {
    return (value - min) / (max - min);
}
function LinearInterpolation(norm, min, max) {
    return (max - min) * norm + min;
}
function Map(value, sourceMin, sourceMax, destMin, destMax) {
    return LinearInterpolation(Normalize(value, sourceMin, sourceMax), destMin, destMax);
}
function Clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
