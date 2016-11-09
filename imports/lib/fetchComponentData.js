const getNeeds =({needs}={needs:[]})=>needs;
const isWrapped = ({WrappedComponent=null})=> WrappedComponent
const compNeeds = (component)=> isWrapped(component)? getNeeds(component.WrappedComponent): getNeeds(component)
export default function fetchComponentData(dispatch, components, params) {
    console.log('components', components);
    console.log('params', params);

    const needs = components.reduce((prev, current) => {
        // console.log('current', current);
      if (isWrapped(current)) {
        console.log('current.WrappedKey',current.WrappedComponent);
      }
        // console.log('current.needs', current.needs);
        // console.log('prev', prev);
        return current ? (compNeeds(current) || []).concat(prev) : prev;
    }, []);
    console.log('needs', needs);
    const promises = needs.map(need => dispatch(need(params)));

    return Promise.all(promises);
}
