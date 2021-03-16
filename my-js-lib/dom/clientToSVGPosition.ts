// from https://stackoverflow.com/questions/10298658/mouse-position-inside-autoscaled-svg
const clientToSVGPosition = (svg: SVGSVGElement) => (e: MouseEvent) => {
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    return pt.matrixTransform(svg.getScreenCTM().inverse())
}