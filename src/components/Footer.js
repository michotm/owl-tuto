import { Component, tags, router } from "@odoo/owl";
const Link = router.Link;

const FOOTER_TEMPLATE = tags.xml/*xml*/ `
<footer>
    <div class="container">
        <Link to="'HOME'" class="navbar-brand">conduit</Link>
        <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
    </div>
</footer>
`;
export class Footer extends Component {
  static template = FOOTER_TEMPLATE;
  static components = { Link };
}