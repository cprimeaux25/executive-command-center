export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      agents: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          trigger_type: string | null
          updated_at: string | null
          workflow_id: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          trigger_type?: string | null
          updated_at?: string | null
          workflow_id?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          trigger_type?: string | null
          updated_at?: string | null
          workflow_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agents_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      athletes: {
        Row: {
          bench_equipped: number | null
          bench_raw: number | null
          body_weight: number | null
          coach_id: string
          created_at: string
          deadlift_equipped: number | null
          deadlift_raw: number | null
          gender: string
          grade: string
          id: string
          name: string
          school: string
          squat_equipped: number | null
          squat_raw: number | null
          updated_at: string
        }
        Insert: {
          bench_equipped?: number | null
          bench_raw?: number | null
          body_weight?: number | null
          coach_id: string
          created_at?: string
          deadlift_equipped?: number | null
          deadlift_raw?: number | null
          gender?: string
          grade?: string
          id?: string
          name: string
          school?: string
          squat_equipped?: number | null
          squat_raw?: number | null
          updated_at?: string
        }
        Update: {
          bench_equipped?: number | null
          bench_raw?: number | null
          body_weight?: number | null
          coach_id?: string
          created_at?: string
          deadlift_equipped?: number | null
          deadlift_raw?: number | null
          gender?: string
          grade?: string
          id?: string
          name?: string
          school?: string
          squat_equipped?: number | null
          squat_raw?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      bid_management: {
        Row: {
          bid_date: string | null
          bid_number: string | null
          bid_status: string | null
          client_name: string | null
          created_at: string | null
          decision_date: string | null
          estimated_cost: number | null
          id: string
          notes: string | null
          project_id: string | null
          result: string | null
          submitted_by: string | null
        }
        Insert: {
          bid_date?: string | null
          bid_number?: string | null
          bid_status?: string | null
          client_name?: string | null
          created_at?: string | null
          decision_date?: string | null
          estimated_cost?: number | null
          id?: string
          notes?: string | null
          project_id?: string | null
          result?: string | null
          submitted_by?: string | null
        }
        Update: {
          bid_date?: string | null
          bid_number?: string | null
          bid_status?: string | null
          client_name?: string | null
          created_at?: string | null
          decision_date?: string | null
          estimated_cost?: number | null
          id?: string
          notes?: string | null
          project_id?: string | null
          result?: string | null
          submitted_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bid_management_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      body_weight_logs: {
        Row: {
          created_at: string
          id: string
          logged_at: string
          notes: string | null
          user_id: string
          weight: number
        }
        Insert: {
          created_at?: string
          id?: string
          logged_at?: string
          notes?: string | null
          user_id: string
          weight: number
        }
        Update: {
          created_at?: string
          id?: string
          logged_at?: string
          notes?: string | null
          user_id?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "body_weight_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_items: {
        Row: {
          actual: number | null
          category: string | null
          committed: number | null
          created_at: string | null
          forecast_eac: number | null
          id: string
          project_id: string | null
          updated_at: string | null
        }
        Insert: {
          actual?: number | null
          category?: string | null
          committed?: number | null
          created_at?: string | null
          forecast_eac?: number | null
          id?: string
          project_id?: string | null
          updated_at?: string | null
        }
        Update: {
          actual?: number | null
          category?: string | null
          committed?: number | null
          created_at?: string | null
          forecast_eac?: number | null
          id?: string
          project_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "budget_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          logo_url: string | null
          name: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          logo_url?: string | null
          name: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          logo_url?: string | null
          name?: string
        }
        Relationships: []
      }
      competition_results: {
        Row: {
          bench: number | null
          created_at: string
          deadlift: number | null
          entered_by: string
          id: string
          meet_entry_id: string
          notes: string | null
          place: number | null
          squat: number | null
          total: number | null
          updated_at: string
        }
        Insert: {
          bench?: number | null
          created_at?: string
          deadlift?: number | null
          entered_by: string
          id?: string
          meet_entry_id: string
          notes?: string | null
          place?: number | null
          squat?: number | null
          total?: number | null
          updated_at?: string
        }
        Update: {
          bench?: number | null
          created_at?: string
          deadlift?: number | null
          entered_by?: string
          id?: string
          meet_entry_id?: string
          notes?: string | null
          place?: number | null
          squat?: number | null
          total?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "competition_results_meet_entry_id_fkey"
            columns: ["meet_entry_id"]
            isOneToOne: false
            referencedRelation: "meet_entries"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          ai_summary: string | null
          file_url: string | null
          id: string
          project_id: string | null
          type: string | null
          updated_at: string | null
          uploaded_at: string | null
          uploaded_by: string | null
        }
        Insert: {
          ai_summary?: string | null
          file_url?: string | null
          id?: string
          project_id?: string | null
          type?: string | null
          updated_at?: string | null
          uploaded_at?: string | null
          uploaded_by?: string | null
        }
        Update: {
          ai_summary?: string | null
          file_url?: string | null
          id?: string
          project_id?: string | null
          type?: string | null
          updated_at?: string | null
          uploaded_at?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      equipment: {
        Row: {
          acquisition_date: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          acquisition_date?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          acquisition_date?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      equipment_maintenance: {
        Row: {
          created_at: string | null
          equipment_id: string | null
          equipment_name: string | null
          id: string
          maintenance_date: string | null
          maintenance_type: string | null
          next_maintenance_due: string | null
          notes: string | null
          performed_by: string | null
          project_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          equipment_id?: string | null
          equipment_name?: string | null
          id?: string
          maintenance_date?: string | null
          maintenance_type?: string | null
          next_maintenance_due?: string | null
          notes?: string | null
          performed_by?: string | null
          project_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          equipment_id?: string | null
          equipment_name?: string | null
          id?: string
          maintenance_date?: string | null
          maintenance_type?: string | null
          next_maintenance_due?: string | null
          notes?: string | null
          performed_by?: string | null
          project_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "equipment_maintenance_equipment_id_fkey"
            columns: ["equipment_id"]
            isOneToOne: false
            referencedRelation: "equipment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "equipment_maintenance_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      equipment_rates: {
        Row: {
          created_at: string | null
          day_rate: number
          description: string | null
          equipment_category: string
          equipment_id: string | null
          equipment_notes: string | null
          id: string
          updated_at: string | null
          weekly_rate: number | null
        }
        Insert: {
          created_at?: string | null
          day_rate: number
          description?: string | null
          equipment_category: string
          equipment_id?: string | null
          equipment_notes?: string | null
          id?: string
          updated_at?: string | null
          weekly_rate?: number | null
        }
        Update: {
          created_at?: string | null
          day_rate?: number
          description?: string | null
          equipment_category?: string
          equipment_id?: string | null
          equipment_notes?: string | null
          id?: string
          updated_at?: string | null
          weekly_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "equipment_rates_equipment_id_fkey"
            columns: ["equipment_id"]
            isOneToOne: false
            referencedRelation: "equipment"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          event_type: string
          id: string
          location: string | null
          start_time: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          event_type?: string
          id?: string
          location?: string | null
          start_time?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          event_type?: string
          id?: string
          location?: string | null
          start_time?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      group_members: {
        Row: {
          added_at: string
          athlete_id: string
          group_id: string
          id: string
        }
        Insert: {
          added_at?: string
          athlete_id: string
          group_id: string
          id?: string
        }
        Update: {
          added_at?: string
          athlete_id?: string
          group_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_members_athlete_id_fkey"
            columns: ["athlete_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      labor_rates: {
        Row: {
          created_at: string | null
          description: string | null
          hourly_rate: number
          id: string
          labor_category: string
          labor_id: string | null
          overtime_rate: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          hourly_rate: number
          id?: string
          labor_category: string
          labor_id?: string | null
          overtime_rate?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          hourly_rate?: number
          id?: string
          labor_category?: string
          labor_id?: string | null
          overtime_rate?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "labor_rates_labor_id_fkey"
            columns: ["labor_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      lift_videos: {
        Row: {
          created_at: string
          file_name: string
          file_size: number | null
          id: string
          lift_type: string
          notes: string | null
          title: string
          user_id: string
          video_url: string
        }
        Insert: {
          created_at?: string
          file_name: string
          file_size?: number | null
          id?: string
          lift_type?: string
          notes?: string | null
          title: string
          user_id: string
          video_url: string
        }
        Update: {
          created_at?: string
          file_name?: string
          file_size?: number | null
          id?: string
          lift_type?: string
          notes?: string | null
          title?: string
          user_id?: string
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "lift_videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      meet_entries: {
        Row: {
          athlete_id: string
          created_at: string
          created_by: string
          division: string
          event_id: string
          id: string
          weight_class: string | null
        }
        Insert: {
          athlete_id: string
          created_at?: string
          created_by: string
          division?: string
          event_id: string
          id?: string
          weight_class?: string | null
        }
        Update: {
          athlete_id?: string
          created_at?: string
          created_by?: string
          division?: string
          event_id?: string
          id?: string
          weight_class?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "meet_entries_athlete_id_fkey"
            columns: ["athlete_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meet_entries_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      MOI_ALDdata: {
        Row: {
          address: string
          analysis_notes: string | null
          analysis_status: string | null
          average_value: number | null
          cluster_id: string | null
          duplicate_retained_serial: string | null
          event_type: string | null
          export_date: string
          id: string
          ignore: boolean | null
          imported_at: string
          info_code: string | null
          is_duplicate: boolean | null
          latest_reading: number | null
          maximum_value: number | null
          moi_ranking: number | null
          priority_level: string | null
          serial_number: string
          street_name: string | null
          track: boolean | null
        }
        Insert: {
          address: string
          analysis_notes?: string | null
          analysis_status?: string | null
          average_value?: number | null
          cluster_id?: string | null
          duplicate_retained_serial?: string | null
          event_type?: string | null
          export_date?: string
          id?: string
          ignore?: boolean | null
          imported_at?: string
          info_code?: string | null
          is_duplicate?: boolean | null
          latest_reading?: number | null
          maximum_value?: number | null
          moi_ranking?: number | null
          priority_level?: string | null
          serial_number: string
          street_name?: string | null
          track?: boolean | null
        }
        Update: {
          address?: string
          analysis_notes?: string | null
          analysis_status?: string | null
          average_value?: number | null
          cluster_id?: string | null
          duplicate_retained_serial?: string | null
          event_type?: string | null
          export_date?: string
          id?: string
          ignore?: boolean | null
          imported_at?: string
          info_code?: string | null
          is_duplicate?: boolean | null
          latest_reading?: number | null
          maximum_value?: number | null
          moi_ranking?: number | null
          priority_level?: string | null
          serial_number?: string
          street_name?: string | null
          track?: boolean | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          post_id: string | null
          read: boolean
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          post_id?: string | null
          read?: boolean
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          post_id?: string | null
          read?: boolean
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bench_equipped: number | null
          bench_raw: number | null
          bench_shirt_size: string | null
          bio: string | null
          body_weight: number | null
          created_at: string | null
          deadlift_equipped: number | null
          deadlift_raw: number | null
          deadlift_suit_size: string | null
          email: string | null
          full_name: string | null
          gender: string | null
          grade: string | null
          id: string
          role: string
          school: string | null
          squat_equipped: number | null
          squat_raw: number | null
          squat_suit_size: string | null
          status: string
          team: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bench_equipped?: number | null
          bench_raw?: number | null
          bench_shirt_size?: string | null
          bio?: string | null
          body_weight?: number | null
          created_at?: string | null
          deadlift_equipped?: number | null
          deadlift_raw?: number | null
          deadlift_suit_size?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          grade?: string | null
          id: string
          role?: string
          school?: string | null
          squat_equipped?: number | null
          squat_raw?: number | null
          squat_suit_size?: string | null
          status?: string
          team?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bench_equipped?: number | null
          bench_raw?: number | null
          bench_shirt_size?: string | null
          bio?: string | null
          body_weight?: number | null
          created_at?: string | null
          deadlift_equipped?: number | null
          deadlift_raw?: number | null
          deadlift_suit_size?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          grade?: string | null
          id?: string
          role?: string
          school?: string | null
          squat_equipped?: number | null
          squat_raw?: number | null
          squat_suit_size?: string | null
          status?: string
          team?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      program_assignments: {
        Row: {
          assigned_at: string
          assigned_by: string
          athlete_id: string | null
          id: string
          program_id: string
          team: string | null
        }
        Insert: {
          assigned_at?: string
          assigned_by: string
          athlete_id?: string | null
          id?: string
          program_id: string
          team?: string | null
        }
        Update: {
          assigned_at?: string
          assigned_by?: string
          athlete_id?: string | null
          id?: string
          program_id?: string
          team?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "program_assignments_athlete_id_fkey"
            columns: ["athlete_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_assignments_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      programs: {
        Row: {
          coach_id: string
          created_at: string
          description: string | null
          file_name: string
          file_type: string
          file_url: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          coach_id: string
          created_at?: string
          description?: string | null
          file_name: string
          file_type: string
          file_url: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          coach_id?: string
          created_at?: string
          description?: string | null
          file_name?: string
          file_type?: string
          file_url?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      project_types: {
        Row: {
          created_at: string | null
          id: string
          type_id: string | null
          type_name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          type_id?: string | null
          type_name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          type_id?: string | null
          type_name?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      projects_new: {
        Row: {
          client_id: string | null
          created_at: string | null
          end_date: string | null
          health_score: number | null
          id: string
          location: string | null
          name: string | null
          project_type_id: string | null
          start_date: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string | null
          end_date?: string | null
          health_score?: number | null
          id?: string
          location?: string | null
          name?: string | null
          project_type_id?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string | null
          end_date?: string | null
          health_score?: number | null
          id?: string
          location?: string | null
          name?: string | null
          project_type_id?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_new_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_new_project_type_id_fkey"
            columns: ["project_type_id"]
            isOneToOne: false
            referencedRelation: "project_types"
            referencedColumns: ["id"]
          },
        ]
      }
      resource_management: {
        Row: {
          allocation_percentage: number | null
          created_at: string | null
          employee_id: string | null
          employee_name: string | null
          end_date: string | null
          hours_allocated: number | null
          id: string
          notes: string | null
          project_id: string | null
          role: string | null
          start_date: string | null
          status: string | null
        }
        Insert: {
          allocation_percentage?: number | null
          created_at?: string | null
          employee_id?: string | null
          employee_name?: string | null
          end_date?: string | null
          hours_allocated?: number | null
          id?: string
          notes?: string | null
          project_id?: string | null
          role?: string | null
          start_date?: string | null
          status?: string | null
        }
        Update: {
          allocation_percentage?: number | null
          created_at?: string | null
          employee_id?: string | null
          employee_name?: string | null
          end_date?: string | null
          hours_allocated?: number | null
          id?: string
          notes?: string | null
          project_id?: string | null
          role?: string | null
          start_date?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resource_management_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      resources: {
        Row: {
          category: string
          created_at: string
          description: string | null
          file_name: string | null
          file_size: number | null
          file_type: string | null
          file_url: string | null
          id: string
          link_url: string | null
          title: string
          updated_at: string
          uploaded_by: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          file_name?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          link_url?: string | null
          title: string
          updated_at?: string
          uploaded_by: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          file_name?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          link_url?: string | null
          title?: string
          updated_at?: string
          uploaded_by?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigned_to: string | null
          completion_pct: number | null
          created_at: string
          due_date: string | null
          id: string
          notes: string | null
          project_id: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          completion_pct?: number | null
          created_at?: string
          due_date?: string | null
          id?: string
          notes?: string | null
          project_id: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          completion_pct?: number | null
          created_at?: string
          due_date?: string | null
          id?: string
          notes?: string | null
          project_id?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      weight_logs: {
        Row: {
          athlete_id: string
          created_at: string
          id: string
          logged_date: string
          weight: number
        }
        Insert: {
          athlete_id: string
          created_at?: string
          id?: string
          logged_date?: string
          weight: number
        }
        Update: {
          athlete_id?: string
          created_at?: string
          id?: string
          logged_date?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "weight_logs_athlete_id_fkey"
            columns: ["athlete_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      workflows: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          new_column: string | null
          steps: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          new_column?: string | null
          steps?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          new_column?: string | null
          steps?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      is_coach_or_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
