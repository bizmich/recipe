import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface Image {
  fileName: string;
  id: number;
  link: string;
  uploaded: boolean;
}

const useUploadImage = (onSuccess: (image: Image) => {}) => {
  return useMutation<Image, Error, FormData>({
    mutationFn: (form: FormData) =>
      axios
        .post<Image>(
          "https://dev.api-parviz.com/api/uploads/upload-image",
          form,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU1LCJ1c2VyIjoi0JDQsdC00YPQvNCw0LzQsNC00L7QsiDQkNCx0LTRg9C70LvQviIsImlhdCI6MTY4MzEyMDQ2NCwiZXhwIjoxNzAzODU2NDY0fQ.6FoA-UFpiesBXukpxAorxnm2I1sJGUvg6nYp5j2YMos",
            },
          }
        )
        .then((res) => res.data),
    onSuccess: (savedData: Image) => {
      onSuccess(savedData);
    },
  });
};

export default useUploadImage;
