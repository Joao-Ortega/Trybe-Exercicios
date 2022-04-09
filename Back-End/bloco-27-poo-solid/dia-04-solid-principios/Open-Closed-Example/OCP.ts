// export default function progressNotification(
//   message: string,
//   notificationType: string
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message)
//       break;
//   }
// };

import notificType from "./types";

export default function progressNotification(
  message: string,
  notificationType: notificType,
): void {
 console.log(`${notificationType.name}:`, message);
};