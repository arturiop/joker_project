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

    case 422: {
      return notification.error({ message: 'Data validation failed' });
    }

    default:
      return notification.error(object.data);
  }
};

export default errorPopups;
