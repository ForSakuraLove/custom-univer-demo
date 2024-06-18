import type { IMenuButtonItem } from '@univerjs/ui';
import { MenuItemType, MenuPosition } from '@univerjs/ui';

import { ExportExcelButtonOperation } from '../../commands/operations/ExportExcelButtonOperation';

export function ExportExcelButtonFactory(): IMenuButtonItem<string> {
    return {
        // Bind the command id, clicking the button will trigger this command
        id: ExportExcelButtonOperation.id,
        // The type of the menu item, in this case, it is a button
        type: MenuItemType.BUTTON,
        // The icon of the button, which needs to be registered in ComponentManager
        icon: 'ExportExcelButtonIcon',
        // The tooltip of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
        tooltip: 'customMenu.singleButton',
        // The title of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
        title: 'customMenu.button',
        // The button position can be configured in the toolbar or context menu using MenuPosition. If it is a sheet, you can also use SheetMenuPosition to configure the row header, column header, or sheet bar context menu
        positions: [MenuPosition.TOOLBAR_START, MenuPosition.CONTEXT_MENU],
    };
}