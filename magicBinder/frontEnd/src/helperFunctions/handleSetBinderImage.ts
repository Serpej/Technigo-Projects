
export const handleSetBinderImage = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setBinderImage: (newBinderImage: string) => void,
  updateBinderImage: (
    binderName: string, 
    accessToken: string,
    binderImage: string,
    setMessage: (newMessage: string) => void,
    ) => Promise<boolean | undefined>,
  image_uri: string,
  setMessage: (newMessage: string) => void,
  accessToken: string,
  binderName: string
) => {

  e.preventDefault();

  setBinderImage(image_uri);

  updateBinderImage(binderName, accessToken, image_uri, setMessage);

}