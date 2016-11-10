const getNeeds = ({ needs } = { needs: [] }) => needs;
const isWrapped = ({ WrappedComponent = null }) => WrappedComponent;
const compNeeds = (component) => isWrapped(component) ? getNeeds(component.WrappedComponent) :
	getNeeds(component);
export default function fetchComponentData(dispatch, components, params) {
	const needs = components.reduce((prev, current) => {
		return current ? (compNeeds(current) || []).concat(prev) : prev;
	}, []);

	const promises = needs.map(need => dispatch(need(params)));

	return Promise.all(promises);
}