import React from "react";
import DetailPresenter from "./DetailPresenter";
import { tvApi, moviesApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },

      history: { push }
    } = this.props;
    // console.log("TCL: extends -> componentDidMount -> this.props", this.props);

    const parsedId = parseInt(id);
    //숫자 아닌 놈이 들어가면 홈으로 푸시한다
    if (isNaN(parsedId)) {
      push("/");
    }

    const { isMovie } = this.state;

    let result = null;

    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
        // console.log("TCL: extends -> componentDidMount -> request", request);
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
        // console.log("TCL: extends -> componentDidMount -> request", request);
      }
      console.log("TCL: extends -> componentDidMount -> result", result);
    } catch {
      this.setState({ loading: false, error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    // console.log(this.state);

    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
