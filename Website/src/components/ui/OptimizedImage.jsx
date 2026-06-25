import { classNames } from '../../utils/classNames'

export function OptimizedImage({ src, alt, className, loading = 'lazy', width, height, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      className={classNames('h-full w-full object-cover', className)}
      {...props}
    />
  )
}