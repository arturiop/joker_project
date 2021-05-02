import { notification } from 'antd';

const SUCCESSFUL = 'The request was handled successfully';
const errorPopups = (object: any): void => {
  switch (object.code) {
    case 200: {
      return notification.success({ message: SUCCESSFUL });
    }
    case 201: {
      return notification.success({ message: SUCCESSFUL });
    }
    case 204: {
      return notification.success({ message: SUCCESSFUL });
    }
    // case 304: {
    //   return notification.error(object.data);
    // }
    // case 400: {
    //   return notification.error(object.data);
    // }
    // case 401: {
    //   return notification.error(object.data);
    // }
    // case 403: {
    //   return notification.error(object.data);
    // }
    // case 404: {
    //   return notification.error(object.data);
    // }
    // case 405: {
    //   return notification.error(object.data);
    // }
    // case 415: {
    //   return notification.error(object.data);
    // }
    case 422: {
      return notification.error({ message: 'Data validation failed' });
    }
    // case 429: {
    //   return notification.error(object.data);
    // }
    // case 500: {
    //   return notification.error(object.data);
    // }

    default:
      return notification.error(object.data);
  }
};

export default errorPopups;
