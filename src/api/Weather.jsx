import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetWeatherDetails } from "../reducers/Actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from '../components/Header'
import moment from "moment";
import Buttons from "../components/Buttons";
import Searchbutton from "../components/Searchbutton";
import { withTranslation } from 'react-i18next';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  componentDidMount() {
    const { GetWeatherDetails } = this.props.action;
    GetWeatherDetails();
  }
  handleSubmit = e => {
    e.preventDefault();
    const { searchInput } = this.state;
    const { GetWeatherDetails } = this.props.action;
    if (searchInput) GetWeatherDetails(this.state.searchInput);
    this.setState({ searchInput: "" });
  };
  handleOnChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };
  handleOnClick = e => {
    e.preventDefault();
    const { searchInput } = this.state;
    const { GetWeatherDetails } = this.props.action;
    if (!searchInput === 'New York' && !searchInput === 'Madrid' && !searchInput === 'Hong Kong') GetWeatherDetails(this.state.searchInput);
    this.setState({
      searchInput: e.target.value
    });
  };
  render() {
    const { data, success } = this.props.weatherData;
    const { weather, sys, name, main } = data;
    const { searchInput } = this.state;
    const { t } = this.props;
    const current = new Date();
    return (
      <>
        <div className="container">
          <Buttons />
          <Header />
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder={t("content.input-placeholder")}
              value={searchInput}
              onChange={e => this.handleOnChange(e)}
            /><br />
            <button type='button' className="cityBtn"
              value='New York'
              onClick={e => this.handleOnClick(e)}
            >New York | </button>
            <button type='button' className="cityBtn"
              value='Madrid'
              onClick={e => this.handleOnClick(e)}
            >Madrid | </button>
            <button type='button' className="cityBtn"
              value='Hong Kong'
              onClick={e => this.handleOnClick(e)}
            >Hong Kong | </button><br />
            <Searchbutton />
          </form>

          <div className="info">
            <div className="sub-heading">
              {this.props.t('content.subheading')}
            </div>
            <small className="date">
              {success ? moment().format("DD / MM / YYYY") : null}
            </small>
            <div className="location">
              {success ? name : null}
              <small>({success ? sys.country : null})</small>
            </div>
            <div className="forecast-info">
              <div className="forecast-icon">
                {success ? (
                  <img
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt=""
                  />
                ) : null}
              </div>
              <div className="forecast-value">
                <div className="degrees">
                  <span className="degrees-count">
                    {success ? main.temp : null}
                  </span>
                  °C
                </div>
                <span className="weather-condition">
                  {success ? weather[0].description.toUpperCase() : null}
                </span>
              </div>
            </div>
            <div className="additional-info">
              <ul className="list">

                <li>
                  <b>{t("content.min-temp")}</b> {success ? main.temp_min : null}
                </li>
                <li>
                  <b>{t("content.max-temp")}</b> {success ? main.temp_max : null}
                </li>


              </ul>
            </div>
          </div>

        </div>
        <div className="footer">Weather App . Stein Ramirez   {current.getDate()}/
          {current.getMonth() + 1}/ 
          {current.getFullYear()} <></> 
          {current.getHours()}:
          {current.getMinutes()}:
          {current.getSeconds()}</div>
        <ToastContainer />

      </>
    );
  }
}

const mapStateToProps = state => ({
  weatherData: state
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ GetWeatherDetails }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('global')(Weather));