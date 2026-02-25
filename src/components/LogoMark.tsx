import logoImage from '../assets/images/logo.png';

type Props = {
  size?: number;
  className?: string;
};

/**
 * Fly Hook logo component using the official brand image.
 * Features a globe with trekker silhouette and airplane.
 */
export default function LogoMark({ size = 40, className }: Props) {
  return (
    <img
      src={logoImage}
      alt="Fly Hook Tour & Travel"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}
