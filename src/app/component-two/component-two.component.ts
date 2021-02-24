import { Component, OnInit } from "@angular/core";
import { TransferSignalService } from "../transfer-signal.service";
// import { SimplePeer } from 'simple-peer';
declare var SimplePeer;

@Component({
  selector: "app-component-two",
  templateUrl: "./component-two.component.html",
  styleUrls: ["./component-two.component.css"]
})
export class ComponentTwoComponent implements OnInit {
  childPeer = new SimplePeer();

  constructor(private bridge: TransferSignalService) {
    this.bridge.sendSignalToChild$.subscribe(data =>
      this.childPeer.signal(data)
    );
  }

  ngOnInit() {
    this.childPeer.on("signal", data =>
      this.bridge.sendSignalToParent$.next(data)
    );
    this.childPeer.on(
      "stream",
      // @ts-ignore
      stream => (document.querySelector("#child").srcObject = stream)
    );
  }
}
