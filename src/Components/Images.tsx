import img1_1 from "../img/img0_p.jpg";
import img2_1 from "../img/img28_p.jpg";
import img3_1 from "../img/img74_p.jpeg";
import img4_1 from "../img/img138_p.jpeg";
import img5_1 from "../img/img144_p.jpeg";
import img6_1 from "../img/img202_p.jpg";
import img7_1 from "../img/img212_p.jpeg";
import img8_1 from "../img/img218_p.jpg";
import img1_2 from "../img/img0_p2.jpg";
import img2_2 from "../img/img28_p2.jpg";
import img3_2 from "../img/img74_p2.jpg";
import img4_2 from "../img/img138_p2.jpg";
import img5_2 from "../img/img144_p2.jpg";
import img6_2 from "../img/img202_p2.jpg";
import img7_2 from "../img/img212_p2.jpg";
import img8_2 from "../img/img218_p2.jpg";
import img9_1 from "../img/no-image.jpg";

type ImagePair = [string, string];

function Images(userNumber: number) {
  let images: ImagePair[];

  switch (userNumber) {
    case 1:
      images = [
        [img1_1, img1_2],
        [img2_1, img2_2],
        [img5_1, img5_2],
        [img8_1, img8_2],
        [img9_1, img9_1],
      ];
      break;
    case 2:
      images = [
        [img3_1, img3_2],
        [img4_1, img4_2],
        [img6_1, img6_2],
        [img7_1, img7_2],
        [img9_1, img9_1],
      ];
      break;
    case 3:
      images = [
        [img1_1, img1_2],
        [img2_1, img2_2],
        [img7_1, img7_2],
        [img4_1, img4_2],
        [img9_1, img9_1],
      ];
      break;
    case 4:
      images = [
        [img3_1, img3_2],
        [img5_1, img5_2],
        [img8_1, img8_2],
        [img6_1, img6_2],
        [img9_1, img9_1],
      ];
      break;
    case 5:
      images = [
        [img1_1, img1_2],
        [img3_1, img3_2],
        [img5_1, img5_2],
        [img2_1, img2_2],
        [img9_1, img9_1],
      ];
      break;
    case 6:
      images = [
        [img4_1, img4_2],
        [img6_1, img6_2],
        [img8_1, img8_2],
        [img7_1, img7_2],
        [img9_1, img9_1],
      ];
      break;
    case 7:
      images = [
        [img1_1, img1_2],
        [img2_1, img2_2],
        [img4_1, img4_2],
        [img6_1, img6_2],
        [img9_1, img9_1],
      ];
      break;
    case 8:
      images = [
        [img3_1, img3_2],
        [img5_1, img5_2],
        [img6_1, img6_2],
        [img8_1, img8_2],
        [img9_1, img9_1],
      ];
      break;
    case 9:
      images = [
        [img1_1, img1_2],
        [img4_1, img4_2],
        [img7_1, img7_2],
        [img2_1, img2_2],
        [img9_1, img9_1],
      ];
      break;
    default:
      images = [
        [img1_1, img1_2],
        [img2_1, img2_2],
        [img3_1, img3_2],
        [img4_1, img4_2],
        [img5_1, img5_2],
        [img6_1, img6_2],
        [img7_1, img7_2],
        [img8_1, img8_2],
        [img9_1, img9_1],
      ];
      break;
  }

  return images;
}

export default Images;
