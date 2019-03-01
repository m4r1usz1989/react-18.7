var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'https://findicons.com/files/icons/2206/austerity/59/com_apple_mobileaddressbook.png'} />
        <p className={'contactLabel'}>Imię: this.props.item.firstName</p>
        <p className={'contactLabel'}>Nazwisko: this.props.item.lastName</p>
        <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>this.props.item.email</a>
      </div>
      )
    },
  });