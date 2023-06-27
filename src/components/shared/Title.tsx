import { ReactNode } from 'react';

type TitleProps = {
  size: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
  className?: string; // optional classname prop
};

const Title = ({ size, children, className = '' }: TitleProps) => {
  let Heading: 'h1' | 'h2' | 'h3' | 'h4' = 'h2';
  let textSize = 'text-2xl';

  switch(size) {
    case 'h1':
      Heading = 'h1';
      textSize = 'text-3xl';
      break;
    case 'h2':
      Heading = 'h2';
      textSize = 'text-2xl';
      break;
    case 'h3':
      Heading = 'h3';
      textSize = 'text-xl';
      break;
    case 'h4':
      Heading = 'h4';
      textSize = 'text-lg';
      break;
    default:
      break;
  }

  return (
    <Heading className={`${textSize} font-bold mt-2 mb-2 ${className}`}>{children}</Heading>
  )
};

export default Title;
