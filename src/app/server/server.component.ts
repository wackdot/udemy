import { Component } from '@angular/core'

@Component({
    // Inform stores the meta data regarding the component
    selector: 'app-server',
    // Relative pathing
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }

}