import { Disposable, ICommandService, LifecycleStages, OnLifecycle } from '@univerjs/core';
import { ComponentManager } from '@univerjs/ui';
import type { IMenuItemFactory } from '@univerjs/ui';
import { IMenuService } from '@univerjs/ui';
import { Inject, Injector } from '@wendellhu/redi';

import { ImportExcelButtonFactory } from './menu/import-excel-button.menu';
import { ExportExcelButtonFactory } from './menu/export-excel-button.menu';
import { ImportExcelButtonOperation } from '../commands/operations/ImportExcelButtonOperation';
import { ExportExcelButtonOperation } from '../commands/operations/ExportExcelButtonOperation';
import { ImportExcelButtonIcon } from '../components/button-icon/ImportExcelButtonIcon';
import { ExportExcelButtonIcon } from '../components/button-icon/ExportExcelButtonIcon';

@OnLifecycle(LifecycleStages.Steady, CustomMenuController)
export class CustomMenuController extends Disposable {
    constructor(
        @Inject(Injector) private readonly _injector: Injector,
        @ICommandService private readonly _commandService: ICommandService,
        @IMenuService private readonly _menuService: IMenuService,
        @Inject(ComponentManager) private readonly _componentManager: ComponentManager,
    ) {
        super();

        this._initCommands();
        this._registerComponents();
        this._initMenus();
    }

    /**
     * register commands
    */
    private _initCommands(): void {
        [
            ImportExcelButtonOperation,
            ExportExcelButtonOperation,
        ].forEach((c) => {
            this.disposeWithMe(this._commandService.registerCommand(c));
        });
    }

    /**
     * register icon components
    */
    private _registerComponents(): void {
        const componentManager = this._componentManager;
        this.disposeWithMe(componentManager.register("ImportExcelButtonIcon", ImportExcelButtonIcon));
        this.disposeWithMe(componentManager.register("ExportExcelButtonIcon", ExportExcelButtonIcon));
    }

    /**
     * register menu items
    */
    private _initMenus(): void {
        (
            [
                ImportExcelButtonFactory,
                ExportExcelButtonFactory,
            ] as IMenuItemFactory[]
        ).forEach((factory) => {
            this.disposeWithMe(this._menuService.addMenuItem(this._injector.invoke(factory), {}));
        });
    }
}
