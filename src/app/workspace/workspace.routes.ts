import { RouterModule } from '@angular/router';
import { PostTableComponent } from '../post/post-table/post-table.component';
import { WritePostComponent } from '../post/write-post/write-post.component';
import { CommentTableComponent } from '../comment-table/comment-table.component';
import { OrgMngComponent } from '../org/org-mng/org-mng.component';
import { UserTableComponent } from '../user/user-table/user-table.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { RoleTableComponent } from '../role/role-table/role-table.component';
import { PermissionTableComponent } from '../permission/permission-table/permission-table.component';
import { SysMonitorComponent } from '../sys/sys-monitor/sys-monitor.component';
import { GaodeMapComponent } from '../map/gaode-map/gaode-map.component';
import { AmapComponent } from '../map/gaode-map/amap/amap.component';
import { WorkspaceComponent } from './workspace.component';

export const workspaceRoutes=[
	{
        path:'',
        component:WorkspaceComponent,
        children: [
	    	{ path: '',redirectTo:'posttable/page/1',pathMatch:'full'},
	    	{ path: 'posttable/page/:page', component: PostTableComponent },
	    	{ path: 'writepost', component: WritePostComponent },
	    	{ path: 'commenttable/page/:page', component: CommentTableComponent },
	    	{ path: 'orgmng', component: OrgMngComponent },
	    	{ path: 'usertable/page/:page', component: UserTableComponent },
	    	{ path: 'usertable/edituser/:id', component: UserProfileComponent },
	    	{ path: 'usertable/newuser', component: UserProfileComponent },
	    	{ path: 'roletable/page/:page', component: RoleTableComponent },
	    	{ path: 'permissiontable/page/:page', component: PermissionTableComponent },
	    	{ path: 'sysmonitor', component: SysMonitorComponent },
	    	{ path: 'map', component: GaodeMapComponent }
	    ]
    }
];