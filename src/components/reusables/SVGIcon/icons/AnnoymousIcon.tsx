import * as React from "react";

const AnnoymousIcon: React.FC<{
  active?: boolean;
  black?: boolean;
  color?: string;
  size?: number;
}> = ({ active, black, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 3V9C22.5 10.1797 22.3516 11.293 22.0547 12.3398C21.7578 13.3867 21.3477 14.375 20.8242 15.3047C20.3008 16.2344 19.6836 17.1055 18.9727 17.918C18.2617 18.7305 17.4883 19.4922 16.6523 20.2031C15.8164 20.9141 14.9414 21.582 14.0273 22.207C13.1133 22.832 12.1875 23.418 11.25 23.9648C10.3203 23.418 9.39844 22.8359 8.48438 22.2188C7.57031 21.6016 6.69531 20.9336 5.85938 20.2148C5.02344 19.4961 4.25 18.7305 3.53906 17.918C2.82812 17.1055 2.20703 16.2344 1.67578 15.3047C1.14453 14.375 0.734375 13.3867 0.445312 12.3398C0.15625 11.293 0.0078125 10.1797 0 9V3C0.648438 3 1.27734 2.97656 1.88672 2.92969C2.49609 2.88281 3.08984 2.79688 3.66797 2.67188C4.24609 2.54688 4.81641 2.37109 5.37891 2.14453C5.94141 1.91797 6.50391 1.625 7.06641 1.26562C7.73047 0.835938 8.39453 0.519531 9.05859 0.316406C9.72266 0.113281 10.4531 0.0078125 11.25 0C11.6484 0 12.0273 0.0234375 12.3867 0.0703125C12.7461 0.117188 13.0938 0.195312 13.4297 0.304688C13.7656 0.414062 14.1016 0.546875 14.4375 0.703125C14.7734 0.859375 15.1055 1.04688 15.4336 1.26562C15.9961 1.625 16.5586 1.91797 17.1211 2.14453C17.6836 2.37109 18.2539 2.54688 18.832 2.67188C19.4102 2.79688 20.0039 2.88281 20.6133 2.92969C21.2227 2.97656 21.8516 3 22.5 3ZM21 9V4.47656C19.8359 4.41406 18.7227 4.22656 17.6602 3.91406C16.5977 3.60156 15.5703 3.12891 14.5781 2.49609C14.0469 2.15234 13.5195 1.90234 12.9961 1.74609C12.4727 1.58984 11.8906 1.50781 11.25 1.5C10.6172 1.5 10.0391 1.57812 9.51562 1.73438C8.99219 1.89062 8.46094 2.14453 7.92188 2.49609C6.9375 3.12891 5.91406 3.60156 4.85156 3.91406C3.78906 4.22656 2.67188 4.41406 1.5 4.47656V9C1.5 9.99219 1.62891 10.9453 1.88672 11.8594C2.14453 12.7734 2.50391 13.6406 2.96484 14.4609C3.42578 15.2812 3.96484 16.0625 4.58203 16.8047C5.19922 17.5469 5.87109 18.2422 6.59766 18.8906C7.32422 19.5391 8.07812 20.1445 8.85938 20.707C9.64062 21.2695 10.4375 21.7773 11.25 22.2305C12.0469 21.7695 12.8398 21.2617 13.6289 20.707C14.418 20.1523 15.1758 19.5508 15.9023 18.9023C16.6289 18.2539 17.3008 17.5586 17.918 16.8164C18.5352 16.0742 19.0742 15.293 19.5352 14.4727C19.9961 13.6523 20.3516 12.7812 20.6016 11.8594C20.8516 10.9375 20.9844 9.98438 21 9ZM11.25 3.75C11.7656 3.75 12.25 3.84766 12.7031 4.04297C13.1562 4.23828 13.5508 4.50781 13.8867 4.85156C14.2227 5.19531 14.4922 5.59375 14.6953 6.04688C14.8984 6.5 15 6.98438 15 7.5V9H16.5V16.5H6V9H7.5V7.5C7.5 6.98438 7.59766 6.5 7.79297 6.04688C7.98828 5.59375 8.25391 5.19922 8.58984 4.86328C8.92578 4.52734 9.32422 4.25781 9.78516 4.05469C10.2461 3.85156 10.7344 3.75 11.25 3.75ZM15 15V10.5H7.5V15H15ZM9 9H13.5V7.5C13.5 7.1875 13.4414 6.89453 13.3242 6.62109C13.207 6.34766 13.0469 6.10938 12.8438 5.90625C12.6406 5.70312 12.4023 5.54297 12.1289 5.42578C11.8555 5.30859 11.5625 5.25 11.25 5.25C10.9375 5.25 10.6445 5.30859 10.3711 5.42578C10.0977 5.54297 9.85938 5.70312 9.65625 5.90625C9.45312 6.10938 9.29297 6.34766 9.17578 6.62109C9.05859 6.89453 9 7.1875 9 7.5V9Z"
        fill={black ? "#212121" : active ? "#ffe878" : color}
      />
    </svg>
  );
};

export default AnnoymousIcon;
