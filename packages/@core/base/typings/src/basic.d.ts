interface BasicOption {
  label: string;
  value: string;
}

type SelectOption = BasicOption;

type TabOption = BasicOption;

type UserType = {
  /** 是否为管理员 */
  admin: boolean;
  avatar: string;
  createTime: string;
  dept: {
    deptName: string;
  };
  deptId: number;
  email: string;
  loginIp: string;
  nickName: string;
  phonenumber: string;
  remark: string;
  roles: { admin: boolean; roleKey: string; roleName: string }[];
  status: string;
  userId: number;
  userName: string;
};

/** 用户信息 */
interface UserInfoType {
  /**
   * 首页地址
   */
  homePath: string;

  /**
   * 权限列表
   */
  permissions: string[];

  /**
   * 用户角色
   */
  roles: string[];

  /**
   * 用户角色
   */
  user: UserType;
}

type ClassType = Array<object | string> | object | string;

export type {
  BasicOption,
  ClassType,
  SelectOption,
  TabOption,
  UserInfoType,
  UserType,
};
