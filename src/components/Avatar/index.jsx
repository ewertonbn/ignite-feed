import { AvatarImg } from "./styles";

export function Avatar({ hasBorder = true, src }) {
  return (
    <AvatarImg 
      hasBorder={hasBorder}
      src={src} 
    />
  );
}