import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
export default function Dashboard(props) {
    return <>Dashboard</>;
}
Dashboard.layout = (page) => (
    <AuthenticatedLayout
        children={page}
        user={page.props.auth.user}
        title={"Dashboard"}
    />
);
