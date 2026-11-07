import { Routes, Route } from "react-router-dom";

import { PublicLayout } from "../layouts/PublicLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { AuthorLayout } from "../layouts/AuthorLayout";
import { AdminLayout } from "../layouts/AdminLayout";

import { ProtectedRoute } from "./ProtectedRoute";
import { RoleGuard } from "./RoleGuard";

import { PlaceholderPage } from "../pages/PlaceholderPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* Public website */}
      <Route element={<PublicLayout />}>
        <Route
          index
          element={
            <PlaceholderPage
              title="Welcome to BlogX"
              description="Discover stories, ideas and knowledge from our writers."
            />
          }
        />

        <Route
          path="articles"
          element={
            <PlaceholderPage
              title="Explore Articles"
              description="Discover the latest articles published on BlogX."
            />
          }
        />

        <Route
          path="articles/:id"
          element={
            <PlaceholderPage
              title="Article Details"
              description="Read the complete article."
            />
          }
        />

        <Route
          path="categories"
          element={
            <PlaceholderPage
              title="Categories"
              description="Explore articles by category."
            />
          }
        />

        <Route
          path="profile"
          element={
            <PlaceholderPage
              title="My Profile"
              description="View and manage your account."
            />
          }
        />
      </Route>

      {/* Authentication pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        {/* Author routes */}
        <Route element={<RoleGuard allowedRoles={["AUTHOR"]} />}>
          <Route path="/author" element={<AuthorLayout />}>
            <Route
              index
              element={
                <PlaceholderPage
                  title="Author Overview"
                  description="View your writing activity and articles."
                />
              }
            />

            <Route
              path="articles"
              element={
                <PlaceholderPage
                  title="My Articles"
                  description="Manage your articles and drafts."
                />
              }
            />

            <Route
              path="articles/new"
              element={
                <PlaceholderPage
                  title="Create Article"
                  description="Write and publish a new article."
                />
              }
            />

            <Route
              path="profile"
              element={
                <PlaceholderPage
                  title="Author Profile"
                  description="Manage your author account."
                />
              }
            />
          </Route>
        </Route>

        {/* Admin routes */}
        <Route element={<RoleGuard allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              index
              element={
                <PlaceholderPage
                  title="Admin Overview"
                  description="Monitor and manage your BlogX platform."
                />
              }
            />

            <Route
              path="articles"
              element={
                <PlaceholderPage
                  title="Manage Articles"
                  description="Review and manage platform articles."
                />
              }
            />

            <Route
              path="categories"
              element={
                <PlaceholderPage
                  title="Manage Categories"
                  description="Create, update and delete categories."
                />
              }
            />

            <Route
              path="users"
              element={
                <PlaceholderPage
                  title="Manage Users"
                  description="View users and manage their roles."
                />
              }
            />

            <Route
              path="profile"
              element={
                <PlaceholderPage
                  title="Admin Profile"
                  description="Manage your administrator account."
                />
              }
            />
          </Route>
        </Route>
      </Route>

      {/* Not found */}
      <Route
        path="*"
        element={
          <PlaceholderPage
            title="404 - Page Not Found"
            description="The page you're looking for doesn't exist."
          />
        }
      />
    </Routes>
  );
}
