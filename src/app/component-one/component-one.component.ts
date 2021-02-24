import { Component, OnInit } from "@angular/core";
import { TransferSignalService } from "../transfer-signal.service";

declare var SimplePeer;

@Component({
  selector: "app-component-one",
  templateUrl: "./component-one.component.html",
  styleUrls: ["./component-one.component.css"]
})
export class ComponentOneComponent implements OnInit {
  parentPeer;

  constructor(private bridge: TransferSignalService) {
    this.bridge.sendSignalToParent$.subscribe(data =>
      this.parentPeer.signal(data)
    );
  }

  ngOnInit() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: {
            min: 640,
            max: 1280
          },
          height: {
            min: 480,
            max: 720
          },
          frameRate: 30
        }
      })
      .then(stream => {
        // @ts-ignore
        document.getElementById("parent").srcObject = stream;

        this.parentPeer = new SimplePeer({
          initiator: true,
          trickle: false,
          stream
        });

        this.parentPeer.on("connect", () => console.log("Connect"));
        this.parentPeer.on("signal", data =>
          this.bridge.sendSignalToChild$.next(data)
        );
      });
  }
}
