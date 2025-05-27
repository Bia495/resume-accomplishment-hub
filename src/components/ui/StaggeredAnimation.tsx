import { FC, ReactNode, Children, cloneElement, isValidElement } from "react";

interface StaggeredAnimationProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const StaggeredAnimation: FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 100,
  className = ""
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            key: index,
            style: {
              ...child.props.style,
              animationDelay: `${index * staggerDelay}ms`
            }
          });
        }
        return child;
      })}
    </div>
  );
};

export default StaggeredAnimation;
