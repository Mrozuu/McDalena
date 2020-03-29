import React from "react";
import "./SetPageStyle.css";

class SetContentDescription extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="setContentDescription">
        <h2>Krótki opis</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          mollis nec mi in lobortis. Donec non ullamcorper lorem. Duis faucibus,
          diam ac dictum lacinia, leo felis maximus magna, a ultricies magna dui
          in purus. Nulla consequat leo non odio finibus, non congue dolor
          eleifend. Mauris tincidunt tempus ultricies. Vestibulum ac tortor
          egestas, venenatis lorem laoreet, suscipit mauris. Fusce at tincidunt
          magna. Integer augue nisi, dignissim ac pulvinar quis, tincidunt
          semper ex. Vestibulum semper metus urna, eget fringilla ipsum
          pellentesque non. Phasellus varius dolor sem, eu volutpat orci cursus
          in. Pellentesque sodales ante quam, vitae vulputate velit sagittis
          quis. Donec eu tempus arcu. Etiam laoreet neque id est auctor rhoncus.
          Nulla facilisi.
          <br /> <br />
          Fusce tempus orci vel leo rutrum venenatis. Vivamus mattis vel lacus
          vel fringilla. Nulla facilisi. Duis eros dui, egestas eleifend
          pharetra ullamcorper, ultricies in nibh. Aenean hendrerit nisi sapien,
          eu lobortis nunc finibus a. Suspendisse potenti. Nullam blandit, neque
          sed gravida porta, lorem risus auctor ligula, ut pellentesque tortor
          tortor non dolor. Vestibulum vehicula gravida tellus ac auctor. Nulla
          quis ullamcorper odio. Aliquam semper semper felis, ut placerat arcu
          accumsan sed. Vivamus tincidunt nunc vitae est bibendum hendrerit.
        </p>
      </div>
    );
  }
}

export default SetContentDescription;
