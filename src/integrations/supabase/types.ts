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
      agent_alerts: {
        Row: {
          agent_id: string | null
          body: string | null
          channel: string
          created_at: string
          delivery_response: string | null
          delivery_status: string
          finding_id: string | null
          id: string
          recipient: string
          retry_count: number
          sent_at: string | null
          subject: string | null
        }
        Insert: {
          agent_id?: string | null
          body?: string | null
          channel: string
          created_at?: string
          delivery_response?: string | null
          delivery_status?: string
          finding_id?: string | null
          id?: string
          recipient: string
          retry_count?: number
          sent_at?: string | null
          subject?: string | null
        }
        Update: {
          agent_id?: string | null
          body?: string | null
          channel?: string
          created_at?: string
          delivery_response?: string | null
          delivery_status?: string
          finding_id?: string | null
          id?: string
          recipient?: string
          retry_count?: number
          sent_at?: string | null
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_alerts_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_alerts_finding_id_fkey"
            columns: ["finding_id"]
            isOneToOne: false
            referencedRelation: "agent_findings"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_findings: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by: string | null
          agent_id: string
          created_at: string
          dedupe_key: string | null
          description: string | null
          deviation_pct: number | null
          evidence: Json | null
          finding_type: Database["public"]["Enums"]["finding_type"]
          id: string
          last_seen_at: string | null
          metric_baseline: number | null
          metric_name: string | null
          metric_value: number | null
          occurrence_count: number
          project_id: string | null
          recommended_action: string | null
          resolution_notes: string | null
          resolved_at: string | null
          run_id: string | null
          severity: Database["public"]["Enums"]["finding_severity"]
          source_record_ids: string[] | null
          source_table: string | null
          status: Database["public"]["Enums"]["finding_status"]
          title: string
          updated_at: string
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          agent_id: string
          created_at?: string
          dedupe_key?: string | null
          description?: string | null
          deviation_pct?: number | null
          evidence?: Json | null
          finding_type: Database["public"]["Enums"]["finding_type"]
          id?: string
          last_seen_at?: string | null
          metric_baseline?: number | null
          metric_name?: string | null
          metric_value?: number | null
          occurrence_count?: number
          project_id?: string | null
          recommended_action?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          run_id?: string | null
          severity?: Database["public"]["Enums"]["finding_severity"]
          source_record_ids?: string[] | null
          source_table?: string | null
          status?: Database["public"]["Enums"]["finding_status"]
          title: string
          updated_at?: string
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          agent_id?: string
          created_at?: string
          dedupe_key?: string | null
          description?: string | null
          deviation_pct?: number | null
          evidence?: Json | null
          finding_type?: Database["public"]["Enums"]["finding_type"]
          id?: string
          last_seen_at?: string | null
          metric_baseline?: number | null
          metric_name?: string | null
          metric_value?: number | null
          occurrence_count?: number
          project_id?: string | null
          recommended_action?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          run_id?: string | null
          severity?: Database["public"]["Enums"]["finding_severity"]
          source_record_ids?: string[] | null
          source_table?: string | null
          status?: Database["public"]["Enums"]["finding_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_findings_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_findings_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_findings_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "agent_findings_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "agent_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_runs: {
        Row: {
          agent_id: string
          cost_estimate_usd: number | null
          created_at: string
          ended_at: string | null
          error_message: string | null
          findings_count: number
          id: string
          input_payload: Json | null
          output_payload: Json | null
          output_summary: string | null
          rows_scanned: number | null
          started_at: string
          status: Database["public"]["Enums"]["agent_run_status"]
          tools_called: string[] | null
          trigger_source: string | null
          trigger_type: Database["public"]["Enums"]["agent_trigger_type"]
        }
        Insert: {
          agent_id: string
          cost_estimate_usd?: number | null
          created_at?: string
          ended_at?: string | null
          error_message?: string | null
          findings_count?: number
          id?: string
          input_payload?: Json | null
          output_payload?: Json | null
          output_summary?: string | null
          rows_scanned?: number | null
          started_at?: string
          status?: Database["public"]["Enums"]["agent_run_status"]
          tools_called?: string[] | null
          trigger_source?: string | null
          trigger_type?: Database["public"]["Enums"]["agent_trigger_type"]
        }
        Update: {
          agent_id?: string
          cost_estimate_usd?: number | null
          created_at?: string
          ended_at?: string | null
          error_message?: string | null
          findings_count?: number
          id?: string
          input_payload?: Json | null
          output_payload?: Json | null
          output_summary?: string | null
          rows_scanned?: number | null
          started_at?: string
          status?: Database["public"]["Enums"]["agent_run_status"]
          tools_called?: string[] | null
          trigger_source?: string | null
          trigger_type?: Database["public"]["Enums"]["agent_trigger_type"]
        }
        Relationships: [
          {
            foreignKeyName: "agent_runs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
        ]
      }
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
      atlas_conversations: {
        Row: {
          created_at: string
          id: string
          messages: Json
          owner_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          messages?: Json
          owner_id: string
          title?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          messages?: Json
          owner_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      atlas_events: {
        Row: {
          calendar: string
          created_at: string
          ends_at: string
          external_id: string | null
          id: string
          location: string | null
          notes: string | null
          owner_id: string
          starts_at: string
          title: string
          updated_at: string
        }
        Insert: {
          calendar?: string
          created_at?: string
          ends_at: string
          external_id?: string | null
          id?: string
          location?: string | null
          notes?: string | null
          owner_id: string
          starts_at: string
          title: string
          updated_at?: string
        }
        Update: {
          calendar?: string
          created_at?: string
          ends_at?: string
          external_id?: string | null
          id?: string
          location?: string | null
          notes?: string | null
          owner_id?: string
          starts_at?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      atlas_notes: {
        Row: {
          body: string | null
          created_at: string
          id: string
          owner_id: string
          source: string
          tags: string[]
          title: string
          transcript: string | null
          updated_at: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          owner_id: string
          source?: string
          tags?: string[]
          title: string
          transcript?: string | null
          updated_at?: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          owner_id?: string
          source?: string
          tags?: string[]
          title?: string
          transcript?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      atlas_tasks: {
        Row: {
          created_at: string
          due: string | null
          id: string
          notes: string | null
          owner_id: string
          priority: string
          source: string
          status: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          due?: string | null
          id?: string
          notes?: string | null
          owner_id: string
          priority?: string
          source?: string
          status?: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          due?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          priority?: string
          source?: string
          status?: string
          tags?: string[]
          title?: string
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
          {
            foreignKeyName: "bid_management_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
          budget_qty: number | null
          budget_uom: Database["public"]["Enums"]["uom_type"] | null
          category: string | null
          committed: number | null
          cost_code_id: string | null
          created_at: string | null
          forecast_eac: number | null
          id: string
          project_id: string | null
          updated_at: string | null
        }
        Insert: {
          actual?: number | null
          budget_qty?: number | null
          budget_uom?: Database["public"]["Enums"]["uom_type"] | null
          category?: string | null
          committed?: number | null
          cost_code_id?: string | null
          created_at?: string | null
          forecast_eac?: number | null
          id?: string
          project_id?: string | null
          updated_at?: string | null
        }
        Update: {
          actual?: number | null
          budget_qty?: number | null
          budget_uom?: Database["public"]["Enums"]["uom_type"] | null
          category?: string | null
          committed?: number | null
          cost_code_id?: string | null
          created_at?: string | null
          forecast_eac?: number | null
          id?: string
          project_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "budget_items_cost_code_id_fkey"
            columns: ["cost_code_id"]
            isOneToOne: false
            referencedRelation: "cost_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "budget_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "budget_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
      cost_codes: {
        Row: {
          category: string
          code: string
          created_at: string
          default_uom: Database["public"]["Enums"]["uom_type"] | null
          description: string
          id: string
          is_active: boolean
          notes: string | null
          parent_code_id: string | null
          project_id: string | null
          unit_cost: number | null
          updated_at: string
        }
        Insert: {
          category: string
          code: string
          created_at?: string
          default_uom?: Database["public"]["Enums"]["uom_type"] | null
          description: string
          id?: string
          is_active?: boolean
          notes?: string | null
          parent_code_id?: string | null
          project_id?: string | null
          unit_cost?: number | null
          updated_at?: string
        }
        Update: {
          category?: string
          code?: string
          created_at?: string
          default_uom?: Database["public"]["Enums"]["uom_type"] | null
          description?: string
          id?: string
          is_active?: boolean
          notes?: string | null
          parent_code_id?: string | null
          project_id?: string | null
          unit_cost?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cost_codes_parent_code_id_fkey"
            columns: ["parent_code_id"]
            isOneToOne: false
            referencedRelation: "cost_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cost_codes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cost_codes_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
          {
            foreignKeyName: "documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
          {
            foreignKeyName: "equipment_maintenance_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
      field_report_items: {
        Row: {
          cost_code_id: string | null
          created_at: string
          description: string
          equipment_id: string | null
          field_report_id: string
          id: string
          item_type: string
          notes: string | null
          quantity: number
          source_rate_id: string | null
          total_cost: number | null
          unit_cost: number | null
          uom: Database["public"]["Enums"]["uom_type"]
        }
        Insert: {
          cost_code_id?: string | null
          created_at?: string
          description: string
          equipment_id?: string | null
          field_report_id: string
          id?: string
          item_type: string
          notes?: string | null
          quantity: number
          source_rate_id?: string | null
          total_cost?: number | null
          unit_cost?: number | null
          uom: Database["public"]["Enums"]["uom_type"]
        }
        Update: {
          cost_code_id?: string | null
          created_at?: string
          description?: string
          equipment_id?: string | null
          field_report_id?: string
          id?: string
          item_type?: string
          notes?: string | null
          quantity?: number
          source_rate_id?: string | null
          total_cost?: number | null
          unit_cost?: number | null
          uom?: Database["public"]["Enums"]["uom_type"]
        }
        Relationships: [
          {
            foreignKeyName: "field_report_items_cost_code_id_fkey"
            columns: ["cost_code_id"]
            isOneToOne: false
            referencedRelation: "cost_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "field_report_items_equipment_id_fkey"
            columns: ["equipment_id"]
            isOneToOne: false
            referencedRelation: "equipment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "field_report_items_field_report_id_fkey"
            columns: ["field_report_id"]
            isOneToOne: false
            referencedRelation: "field_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      field_reports: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string
          crew_size: number | null
          gps_lat: number | null
          gps_lng: number | null
          id: string
          location: string | null
          notes: string | null
          photo_urls: string[] | null
          project_id: string
          rejected_reason: string | null
          report_date: string
          report_number: string | null
          reported_by: string | null
          reported_by_name: string | null
          shift: string | null
          signature_url: string | null
          status: Database["public"]["Enums"]["field_report_status"]
          submitted_at: string | null
          temperature_f: number | null
          total_cost: number
          total_equipment_cost: number
          total_labor_cost: number
          total_labor_hours: number
          total_material_cost: number
          updated_at: string
          weather: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          crew_size?: number | null
          gps_lat?: number | null
          gps_lng?: number | null
          id?: string
          location?: string | null
          notes?: string | null
          photo_urls?: string[] | null
          project_id: string
          rejected_reason?: string | null
          report_date?: string
          report_number?: string | null
          reported_by?: string | null
          reported_by_name?: string | null
          shift?: string | null
          signature_url?: string | null
          status?: Database["public"]["Enums"]["field_report_status"]
          submitted_at?: string | null
          temperature_f?: number | null
          total_cost?: number
          total_equipment_cost?: number
          total_labor_cost?: number
          total_labor_hours?: number
          total_material_cost?: number
          updated_at?: string
          weather?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string
          crew_size?: number | null
          gps_lat?: number | null
          gps_lng?: number | null
          id?: string
          location?: string | null
          notes?: string | null
          photo_urls?: string[] | null
          project_id?: string
          rejected_reason?: string | null
          report_date?: string
          report_number?: string | null
          reported_by?: string | null
          reported_by_name?: string | null
          shift?: string | null
          signature_url?: string | null
          status?: Database["public"]["Enums"]["field_report_status"]
          submitted_at?: string | null
          temperature_f?: number | null
          total_cost?: number
          total_equipment_cost?: number
          total_labor_cost?: number
          total_labor_hours?: number
          total_material_cost?: number
          updated_at?: string
          weather?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "field_reports_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "field_reports_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
          },
        ]
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
      labor_entries: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          cost_code_id: string | null
          created_at: string
          employee_id: string | null
          employee_name: string
          entry_date: string
          exported_at: string | null
          field_report_id: string | null
          hourly_rate: number | null
          hours_overtime: number
          hours_regular: number
          id: string
          labor_category: string | null
          notes: string | null
          overtime_cost: number | null
          overtime_rate: number | null
          payroll_period: string | null
          payroll_status: string
          project_id: string | null
          regular_cost: number | null
          total_cost: number | null
          total_hours: number | null
          updated_at: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          cost_code_id?: string | null
          created_at?: string
          employee_id?: string | null
          employee_name: string
          entry_date?: string
          exported_at?: string | null
          field_report_id?: string | null
          hourly_rate?: number | null
          hours_overtime?: number
          hours_regular?: number
          id?: string
          labor_category?: string | null
          notes?: string | null
          overtime_cost?: number | null
          overtime_rate?: number | null
          payroll_period?: string | null
          payroll_status?: string
          project_id?: string | null
          regular_cost?: number | null
          total_cost?: number | null
          total_hours?: number | null
          updated_at?: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          cost_code_id?: string | null
          created_at?: string
          employee_id?: string | null
          employee_name?: string
          entry_date?: string
          exported_at?: string | null
          field_report_id?: string | null
          hourly_rate?: number | null
          hours_overtime?: number
          hours_regular?: number
          id?: string
          labor_category?: string | null
          notes?: string | null
          overtime_cost?: number | null
          overtime_rate?: number | null
          payroll_period?: string | null
          payroll_status?: string
          project_id?: string | null
          regular_cost?: number | null
          total_cost?: number | null
          total_hours?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "labor_entries_cost_code_id_fkey"
            columns: ["cost_code_id"]
            isOneToOne: false
            referencedRelation: "cost_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labor_entries_field_report_id_fkey"
            columns: ["field_report_id"]
            isOneToOne: false
            referencedRelation: "field_reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labor_entries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labor_entries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
          },
        ]
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
          {
            foreignKeyName: "labor_rates_labor_id_fkey"
            columns: ["labor_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
      otter_connections: {
        Row: {
          auto_sync: boolean
          created_at: string
          id: string
          last_event_at: string | null
          last_synced_at: string | null
          otter_email: string | null
          owner_id: string
          updated_at: string
          webhook_secret: string
        }
        Insert: {
          auto_sync?: boolean
          created_at?: string
          id?: string
          last_event_at?: string | null
          last_synced_at?: string | null
          otter_email?: string | null
          owner_id: string
          updated_at?: string
          webhook_secret: string
        }
        Update: {
          auto_sync?: boolean
          created_at?: string
          id?: string
          last_event_at?: string | null
          last_synced_at?: string | null
          otter_email?: string | null
          owner_id?: string
          updated_at?: string
          webhook_secret?: string
        }
        Relationships: []
      }
      otter_meetings: {
        Row: {
          action_items: Json
          audio_url: string | null
          created_at: string
          duration_seconds: number | null
          folder: string | null
          id: string
          keywords: Json
          otter_id: string
          overview: string | null
          owner_id: string
          raw: Json
          share_url: string | null
          speakers: Json
          started_at: string | null
          summary: string | null
          synced_at: string
          title: string
          transcript: string | null
          updated_at: string
        }
        Insert: {
          action_items?: Json
          audio_url?: string | null
          created_at?: string
          duration_seconds?: number | null
          folder?: string | null
          id?: string
          keywords?: Json
          otter_id: string
          overview?: string | null
          owner_id: string
          raw?: Json
          share_url?: string | null
          speakers?: Json
          started_at?: string | null
          summary?: string | null
          synced_at?: string
          title?: string
          transcript?: string | null
          updated_at?: string
        }
        Update: {
          action_items?: Json
          audio_url?: string | null
          created_at?: string
          duration_seconds?: number | null
          folder?: string | null
          id?: string
          keywords?: Json
          otter_id?: string
          overview?: string | null
          owner_id?: string
          raw?: Json
          share_url?: string | null
          speakers?: Json
          started_at?: string | null
          summary?: string | null
          synced_at?: string
          title?: string
          transcript?: string | null
          updated_at?: string
        }
        Relationships: []
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
      project_members: {
        Row: {
          added_at: string
          added_by: string | null
          can_approve_payroll: boolean
          can_approve_reports: boolean
          can_close_period: boolean
          id: string
          project_id: string
          project_role: string
          removed_at: string | null
          user_id: string
        }
        Insert: {
          added_at?: string
          added_by?: string | null
          can_approve_payroll?: boolean
          can_approve_reports?: boolean
          can_close_period?: boolean
          id?: string
          project_id: string
          project_role: string
          removed_at?: string | null
          user_id: string
        }
        Update: {
          added_at?: string
          added_by?: string | null
          can_approve_payroll?: boolean
          can_approve_reports?: boolean
          can_close_period?: boolean
          id?: string
          project_id?: string
          project_role?: string
          removed_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
          },
        ]
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
          {
            foreignKeyName: "resource_management_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
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
      workspace_items: {
        Row: {
          body: string | null
          created_at: string
          id: string
          kind: string
          metadata: Json
          owner_id: string
          source: string
          title: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          kind: string
          metadata?: Json
          owner_id: string
          source?: string
          title: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          kind?: string
          metadata?: Json
          owner_id?: string
          source?: string
          title?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_items_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          created_at: string
          id: string
          kind: string
          owner_id: string
          slug: string
          summary: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          kind?: string
          owner_id: string
          slug: string
          summary?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          kind?: string
          owner_id?: string
          slug?: string
          summary?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      v_field_ops_weekly: {
        Row: {
          hours_overtime: number | null
          hours_regular: number | null
          hours_total: number | null
          labor_cost: number | null
          ot_pct: number | null
          project_id: string | null
          week_start: string | null
          workers: number | null
        }
        Relationships: [
          {
            foreignKeyName: "labor_entries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labor_entries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "v_project_field_capture_targets"
            referencedColumns: ["project_id"]
          },
        ]
      }
      v_project_field_capture_targets: {
        Row: {
          actual_total: number | null
          budget_total: number | null
          budgeted_lines: number | null
          description: string | null
          last_report_date: string | null
          project_id: string | null
          project_name: string | null
          report_count: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      current_user_can_access_project: {
        Args: { _project_id: string }
        Returns: boolean
      }
      current_user_can_approve_payroll: { Args: never; Returns: boolean }
      current_user_can_approve_reports: {
        Args: { _project_id: string }
        Returns: boolean
      }
      current_user_has_any_role: {
        Args: { _roles: string[] }
        Returns: boolean
      }
      current_user_is_admin: { Args: never; Returns: boolean }
      detect_budget_overruns: {
        Args: { p_threshold_pct?: number }
        Returns: Json
      }
      detect_missing_cost_codes: { Args: never; Returns: Json }
      detect_overtime_spikes: {
        Args: { p_ot_threshold_pct?: number; p_window_days?: number }
        Returns: Json
      }
      detect_pending_approvals: { Args: { p_days?: number }; Returns: Json }
      detect_productivity_anomalies: {
        Args: { p_window_days?: number; p_zscore_threshold?: number }
        Returns: Json
      }
      detect_schedule_slippage: { Args: never; Returns: Json }
      detect_stale_drafts: { Args: { p_days?: number }; Returns: Json }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      is_coach_or_admin: { Args: { _user_id: string }; Returns: boolean }
      is_service_role: { Args: never; Returns: boolean }
      rollup_field_report_totals: {
        Args: { p_field_report_id: string }
        Returns: undefined
      }
      run_field_ops_analysis: {
        Args: { p_trigger?: string; p_window_days?: number }
        Returns: Json
      }
      submit_field_report: {
        Args: {
          p_crew_size: number
          p_gps_lat: number
          p_gps_lng: number
          p_items: Json
          p_labor: Json
          p_location: string
          p_notes: string
          p_photo_urls: string[]
          p_project_id: string
          p_report_date: string
          p_reported_by_name: string
          p_shift: string
          p_signature_url: string
          p_submit: boolean
          p_temperature_f: number
          p_weather: string
        }
        Returns: Json
      }
    }
    Enums: {
      agent_run_status:
        | "queued"
        | "running"
        | "success"
        | "failed"
        | "partial"
        | "cancelled"
      agent_trigger_type: "scheduled" | "realtime" | "manual" | "webhook"
      app_role:
        | "admin"
        | "moderator"
        | "user"
        | "project_manager"
        | "timekeeper"
        | "accountant"
        | "foreman"
        | "crew_lead"
        | "viewer"
      field_report_status:
        | "draft"
        | "submitted"
        | "approved"
        | "rejected"
        | "archived"
      finding_severity: "info" | "low" | "medium" | "high" | "critical"
      finding_status:
        | "new"
        | "acknowledged"
        | "in_progress"
        | "resolved"
        | "dismissed"
      finding_type:
        | "anomaly"
        | "trend"
        | "forecast"
        | "insight"
        | "alert"
        | "recommendation"
      uom_type:
        | "feet"
        | "square_feet"
        | "cubic_feet"
        | "cubic_yards"
        | "inch"
        | "square_inch"
        | "meter"
        | "square_meter"
        | "cubic_meter"
        | "ton"
        | "lb"
        | "kg"
        | "gallon"
        | "liter"
        | "truck_load"
        | "load"
        | "ea"
        | "pair"
        | "set"
        | "hour"
        | "day"
        | "week"
        | "month"
        | "lump_sum"
        | "pct"
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
      agent_run_status: [
        "queued",
        "running",
        "success",
        "failed",
        "partial",
        "cancelled",
      ],
      agent_trigger_type: ["scheduled", "realtime", "manual", "webhook"],
      app_role: [
        "admin",
        "moderator",
        "user",
        "project_manager",
        "timekeeper",
        "accountant",
        "foreman",
        "crew_lead",
        "viewer",
      ],
      field_report_status: [
        "draft",
        "submitted",
        "approved",
        "rejected",
        "archived",
      ],
      finding_severity: ["info", "low", "medium", "high", "critical"],
      finding_status: [
        "new",
        "acknowledged",
        "in_progress",
        "resolved",
        "dismissed",
      ],
      finding_type: [
        "anomaly",
        "trend",
        "forecast",
        "insight",
        "alert",
        "recommendation",
      ],
      uom_type: [
        "feet",
        "square_feet",
        "cubic_feet",
        "cubic_yards",
        "inch",
        "square_inch",
        "meter",
        "square_meter",
        "cubic_meter",
        "ton",
        "lb",
        "kg",
        "gallon",
        "liter",
        "truck_load",
        "load",
        "ea",
        "pair",
        "set",
        "hour",
        "day",
        "week",
        "month",
        "lump_sum",
        "pct",
      ],
    },
  },
} as const
