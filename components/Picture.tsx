import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface PictureProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export default function Picture(props: PictureProps) {
    return <img {...props} />;
}
