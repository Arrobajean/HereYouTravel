import * as React from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  max?: number
  translate?: string
}

interface AvatarGroupItemProps {
  src?: string
  alt?: string
  fallback?: string
  className?: string
  href?: string
  onClick?: () => void
  style?: React.CSSProperties
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max, translate = "-20%", ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)
    const displayChildren = max
      ? childrenArray.slice(0, max)
      : childrenArray

    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        <div className="flex -space-x-3">
          {displayChildren.map((child, index) => {
            if (React.isValidElement(child)) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.1,
                    zIndex: 10,
                    translateX: translate,
                  }}
                  className="relative transition-transform duration-200"
                  style={{ zIndex: displayChildren.length - index }}
                >
                  {child}
                </motion.div>
              )
            }
            return child
          })}
        </div>
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"

const AvatarGroupItem = React.forwardRef<
  HTMLDivElement,
  AvatarGroupItemProps
>(({ src, alt, fallback, className, href, onClick, style, ...props }, ref) => {
  const content = (
    <Avatar className={cn("border-2 border-white", className)} {...props}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : null}
      <AvatarFallback className="text-white font-semibold" style={style}>
        {fallback || "+"}
      </AvatarFallback>
    </Avatar>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className="cursor-pointer">
        {content}
      </a>
    )
  }

  return <div ref={ref}>{content}</div>
})
AvatarGroupItem.displayName = "AvatarGroupItem"

export { AvatarGroup, AvatarGroupItem }

