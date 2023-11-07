import { RouteOption } from '../router/types';
import { ThemeMode } from '../theme/constants';

import { LayoutActionType, LayoutComponent, LayoutMode } from './constants';

/**
 * 布局配置
 */
export interface LayoutConfig {
    /** 布局模式 */
    mode?: `${LayoutMode}`;
    /** 是否折叠边栏,如果是embed模式则折叠子变量 */
    collapsed?: boolean;
    /** 布局组件主题色 */
    theme?: Partial<LayoutTheme>;
    /** 布局组件固定设置 */
    fixed?: Partial<LayoutFixed>;
    /** 可用的CSS变量 */
    styles?: LayoutStylesConfig;
}
/**
 * 布局配置本地储存状态池
 */
export interface LayoutState extends ReRequired<LayoutConfig> {
    /** 是否展示移动设备下的菜单 */
    mobileSide: boolean;
    /** 菜单数据 */
    menu: LayoutMenuState;
}

/**
 * 布局组件主题色
 */
export type LayoutTheme = { [key in `${LayoutComponent}`]: `${ThemeMode}` };
/**
 * 布局组件是否固定
 */
export type LayoutFixed = { [key in `${LayoutComponent}`]: boolean };
/**
 * 布局组件CSS变量
 */
export interface LayoutStylesConfig {
    /** 侧边栏宽度 */
    sidebarWidth?: string | number;
    /** 折叠时侧边栏宽度 */
    sidebarCollapseWidth?: string | number;
    /** 顶栏高度 */
    headerHeight?: string | number;
    /** 顶栏明亮模式下的颜色 */
    headerLightColor?: string;
}

/**
 * 布局操作
 */
export type LayoutAction =
    | {
          type: LayoutActionType.CHANGE_FIXED;
          key: keyof LayoutFixed;
          value: boolean;
      }
    | {
          type: LayoutActionType.CHANGE_STYLES;
          /** css值 */
          styles: LayoutStylesConfig;
      }
    | {
          type: LayoutActionType.CHANGE_MODE;
          value: `${LayoutMode}`;
      }
    | {
          type: LayoutActionType.CHANGE_THEME;
          value: Partial<LayoutTheme>;
      }
    | { type: LayoutActionType.CHANGE_COLLAPSE; value: boolean }
    | { type: LayoutActionType.TOGGLE_COLLAPSE }
    | { type: LayoutActionType.CHANGE_MOBILE_SIDE; value: boolean }
    | { type: LayoutActionType.TOGGLE_MOBILE_SIDE }
    | {
          type: LayoutActionType.CHANGE_MENU;
          /** 菜单状态 */
          value: RePartial<LayoutMenuState>;
      };

/**
 * 菜单状态
 */
export interface LayoutMenuState {
    /** 菜单列表 */
    data: RouteOption[];
    /** 展开的菜单 */
    opens: string[];
    /** 选中的菜单 */
    selects: string[];
    /** 拥有子菜单的顶级菜单,用于控制只有一个菜单打开 */
    rootSubKeys: string[];
    /** 分割菜单,用于top和embed模式的菜单 */
    split: LayoutSplitMenuState;
}

/**
 * 分割菜单的顶级菜单列表,用于top和embed模式的菜单
 */
export interface LayoutSplitMenuState {
    /** 菜单数据 */
    data: RouteOption[];
    /** 选中的菜单 */
    selects: string[];
}
