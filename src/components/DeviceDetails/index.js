import { React, useEffect, useState, PureComponent } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Layout from "../Layout";
import logo from "../../assets/images/logo.png";
import styled from "styled-components";

const StyledGraph = styled.div`
  border: solid var(--grey) 1px;
  border-radius: 10px;
  margin: 15px 0;
  padding: 0 3rem 0 0;
  --cast: 4px;
  box-shadow: var(--cast) var(--cast) 0 var(--grey);
  text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  &:hover {
    --cast: 6px;
  }
`;

const StyledHeading = styled.div`
  padding: 1rem;
`;

const DeviceDetails = ({ devices, match }) => {
  const deviceId = parseInt(match.params.deviceId);
  const device = devices.filter((device) => device.id === deviceId).shift();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    fetch(
      `https://canary-homework-test.herokuapp.com/devices/${deviceId}/readings`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setReadings(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [deviceId]);

  readings.forEach((reading, index, readings) => {
    reading.created = reading.created.slice(1, -2);
    readings[index] = reading;
  });

  const temperatures = readings.filter(
    (reading) =>
      reading.type === "temperature" || reading.type === "tempurature"
  );
  const humidities = readings.filter((reading) => reading.type === "humidity");
  const airQualities = readings.filter(
    (reading) => reading.type === "air_quality"
  );

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            fontSize={12}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  const renderLineChart = (data) => {
    if (data.length > 0) {
      return (
        <ResponsiveContainer width="100%" height={380}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, bottom: 100, left: 70 }}
          >
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis
              dataKey="created"
              tick={<CustomizedAxisTick />}
              interval={0}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      );
    } else {
      return <p>No data for this sensor</p>;
    }
  };

  const content = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <img src={logo} alt="logo" className="loading-logo" />;
    } else {
      return (
        <>
          <h1>{device.name} sensors</h1>
          <StyledGraph>
            <StyledHeading>Temperature</StyledHeading>
            {renderLineChart(temperatures)}
          </StyledGraph>
          <StyledGraph>
            <StyledHeading>Humidity</StyledHeading>
            {renderLineChart(humidities)}
          </StyledGraph>
          <StyledGraph>
            <StyledHeading>Air Quality</StyledHeading>
            {renderLineChart(airQualities)}
          </StyledGraph>
        </>
      );
    }
  };

  return <Layout>{content()}</Layout>;
};

export default DeviceDetails;
